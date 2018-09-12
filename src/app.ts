import { observable } from "aurelia-framework";
import { autoinject } from "aurelia-dependency-injection";
import { I18N } from "aurelia-i18n";

@autoinject
export class App {
    public locales: { key: string; label: string }[];
    @observable
    public currentLocale: string;

    constructor(private i18n: I18N) {
        this.locales = [
            { key: "en-US", label: "English" },
            { key: "cs-CZ", label: "Čeština" }
        ];
        this.currentLocale = this.i18n.getLocale();
    }

    public currentLocaleChanged(newValue: string, oldValue: string): void {
        if (newValue) {
            if (newValue !== this.i18n.getLocale()) {
                this.setLocale(newValue);
            }
        }
    }

    private setLocale(locale: string): void {
        this.i18n.setLocale(locale).then(() => {
            console.log(`Locale has been set to ${locale}`);
        });
    }
}
