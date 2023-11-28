const copyEditorAutoFold = require("./src/index.js");
// 该方法将在插件激活的时候调用
function activate(context) {
  context.subscriptions.push(copyEditorAutoFold.foldAllExpandAndCopyEditor);
  context.subscriptions.push(copyEditorAutoFold.copyEditorAll);
  context.subscriptions.push(copyEditorAutoFold.contractScriptTag);
  context.subscriptions.push(copyEditorAutoFold.contractNoScriptTag);
  context.subscriptions.push(copyEditorAutoFold.contractStyleTag);
}
// 该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {}
module.exports = {
  activate,
  deactivate,
};
