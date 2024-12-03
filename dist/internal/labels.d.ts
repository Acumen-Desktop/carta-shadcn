import type { DefaultIconId } from './icons';
import type { Intellisense } from './utils';
type IconId = Intellisense<DefaultIconId>;
/**
 * Labels that may appear in the editor.
 */
export interface Labels {
    writeTab: string;
    previewTab: string;
    iconsLabels: Partial<Record<IconId, string>>;
}
export declare const defaultLabels: Labels;
export {};
