// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as factory from './Provider/view_provider_factory';
import * as globals from './utils/globals';

var cpp_commands: any = undefined
var cpp_events: any = undefined
var tree_data_provider: any = undefined;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  var provider = factory.CreateTreeView();
  cpp_commands = factory.RegisterCommand(provider);
  cpp_events = factory.RegisterEvents();
  tree_data_provider =
      vscode.window.registerTreeDataProvider('CppSolutionView', provider);

  vscode.commands.executeCommand('CppSolutionExplorer.ChangeConfig');
}

// this method is called when your extension is deactivated
export function deactivate() {}
