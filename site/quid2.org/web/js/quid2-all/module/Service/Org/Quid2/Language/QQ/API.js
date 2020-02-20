goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.API');
goog.require('quid2.std');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_734e708f3bd019b91498c4a62927cd8a4012d0e8f7ca8836ca8fbd6f3e0b178b');
goog.require('quid2.module.Data.Either.Hash_a29ddfe9385bcb3413d030cda2461b2bb358acce6ada30f656138064fe3edbff');
goog.require('quid2.module.Data.Int16.Verb_00000A446174612E496E743136000005496E74313600000101000005496E74313600000000000A446174612E496E743136000005496E7431360000');
goog.require('quid2.module.Data.Int8.Verb_000009446174612E496E7438000004496E743800000101000004496E7438000000000009446174612E496E7438000004496E74380000');
goog.require('quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60');
goog.require('quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f');
goog.require('quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000');
goog.require('quid2.module.Data.Word64.Verb_00000B446174612E576F72643634000006576F7264363400000101000006576F7264363400000000000B446174612E576F72643634000006576F726436340000');
goog.require('quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267');
goog.require('quid2.module.Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b');
goog.require('quid2.module.Network.Verbatim.Hash_1ca4b4317d2b683310ac558647701bf3238db5bf9859d5210f7c00b186d6dacd');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_19060ae845a818212dd9a50bb4ef9652a2f2e8ab4a235b76fbf9111e63bd8975');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_2d7a54daf18c1fe6d10cdf2891a129c62441a6ffb490b79ac941056f207dfe33');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_a4fc6234a69b18b643d96087f1240d61f356133c2fecd40f0cc75b3370114380');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_1e2d3d7b70d3c77de45bd03abd5d3e94d4ad77a791c52c2108de6393fbe99bb1');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_6630f8bb08cbb2921b21c839af9197eea7ec2e6bc76ea957f559262b7a9fa92f');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.Hash_efa99176b38e1f46af3ca7e7dc0dd9179472c069ca5f0d0a41d9b754221316d2');

quid2.module.Service.Org.Quid2.Language.QQ.API = (function () {
var s = quid2.std;

return s.defs("Service.Org.Quid2.Language.QQ.API",{},{},[quid2.module.Service.Org.Quid2.Language.QQ.Hash_734e708f3bd019b91498c4a62927cd8a4012d0e8f7ca8836ca8fbd6f3e0b178b,quid2.module.Data.Either.Hash_a29ddfe9385bcb3413d030cda2461b2bb358acce6ada30f656138064fe3edbff,quid2.module.Data.Int16.Verb_00000A446174612E496E743136000005496E74313600000101000005496E74313600000000000A446174612E496E743136000005496E7431360000,quid2.module.Data.Int8.Verb_000009446174612E496E7438000004496E743800000101000004496E7438000000000009446174612E496E7438000004496E74380000,quid2.module.Data.Maybe.Hash_fe1a9ed1fe3015c135b766464e0bcb971d1cd2b1aa733a473dd1055ba4b7eb60,quid2.module.Data.Ref.Hash_380d3344c306e7f70b9cff78b9eebd922dc765caecde389796a59a35f209229f,quid2.module.Data.Word16.Verb_00000B446174612E576F72643136000006576F7264313600000101000006576F7264313600000000000B446174612E576F72643136000006576F726431360000,quid2.module.Data.Word64.Verb_00000B446174612E576F72643634000006576F7264363400000101000006576F7264363400000000000B446174612E576F72643634000006576F726436340000,quid2.module.Network.Domain.Hash_38fd29d583e084e61f43eb4a899c4f4abf29672b7111406e06c47cc4248b9267,quid2.module.Network.EndPoint.Hash_5b8d3169b4666ce03ae288a785a7d9f5824a8c5572abc627fff35b794f9e682b,quid2.module.Network.Verbatim.Hash_1ca4b4317d2b683310ac558647701bf3238db5bf9859d5210f7c00b186d6dacd,quid2.module.Service.Org.Quid2.Language.QQ.Hash_19060ae845a818212dd9a50bb4ef9652a2f2e8ab4a235b76fbf9111e63bd8975,quid2.module.Service.Org.Quid2.Language.QQ.Hash_2d7a54daf18c1fe6d10cdf2891a129c62441a6ffb490b79ac941056f207dfe33,quid2.module.Service.Org.Quid2.Language.QQ.Hash_aaaf360d83bef60c0f086a45d610ee4644bc017eb1e17d4f30769bdac5cba1d3,quid2.module.Service.Org.Quid2.Language.QQ.Hash_a4fc6234a69b18b643d96087f1240d61f356133c2fecd40f0cc75b3370114380,quid2.module.Service.Org.Quid2.Language.QQ.Hash_34532b079044b6d8fcb951790a90b8f8aec83d21c28b91ea50d2115f0efd4505,quid2.module.Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00,quid2.module.Service.Org.Quid2.Language.QQ.Hash_1e2d3d7b70d3c77de45bd03abd5d3e94d4ad77a791c52c2108de6393fbe99bb1,quid2.module.Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369,quid2.module.Service.Org.Quid2.Language.QQ.Hash_6630f8bb08cbb2921b21c839af9197eea7ec2e6bc76ea957f559262b7a9fa92f,quid2.module.Service.Org.Quid2.Language.QQ.Hash_efa99176b38e1f46af3ca7e7dc0dd9179472c069ca5f0d0a41d9b754221316d2]);
})();
