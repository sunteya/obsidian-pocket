import { TFile } from "obsidian"

export type SupportedDesktopPlatform = "mac" | "windows" | "linux";
export type SupportedMobilePlatform = "ios" | "android";
export type SupportedPlatform =
  | SupportedDesktopPlatform
  | SupportedMobilePlatform;

export interface TemplaterAPI {
  overwrite_file_commands(file: TFile, active_file?: boolean): Promise<void>
}
