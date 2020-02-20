goog.provide('quid2.ui.view.Language.Quid2.Code');
goog.require('quid2');
goog.require('quid2.ui.Editor');

quid2.ui.view.Language.Quid2.Code = function(ctx) {
  var q = quid2;
  var me = this;
  var app = quid2.module.Service.Org.Quid2.App;

  // Check before editing.
  // BUG: duplicated code
  // ?CHK: Should save previous versions instead
  function maybeEdit() {
    var name = ctx.obj.match(["absName","relName",[["source","ctx"]]]).relName;
    app.Last.value.privateAppModule.call(name).then(function(pri) {
      if (pri.equal(ctx.top)) edit();
      else if (confirm("Do you really want to edit this module? You already have a private version of " + name.value + " that will be overwritten if you proceed!")) edit();
      }
      ,edit);
  };

  function show() {
    ctx.area.dblclick(maybeEdit);
    display(true);
  };

  function edit() {
    display(false);
  };

  function display(readOnly) {
    me.editor = new quid2.ui.SourceCodeEditor($.extend({},ctx,{obj:$.extend(me.obj,{readOnly:readOnly})}));
  };

  var o = ctx.obj.match(["ref"]);

  ctx.cop("Reading source code",app.Last.value.getSrc.cachedCall(o.ref)).done(function (source) {
    me.obj = {type:"Code",mimeType:"text/x-haskell",patched:new app.Last.value.Stored(o.ref),source:source};
    show();
  });

};
