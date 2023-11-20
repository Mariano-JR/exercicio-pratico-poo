export class ConfiguracaoApp {
    private static instance: ConfiguracaoApp | null = null
    private name: string = 'My App'
    private version: string = '1.0.0'
    private theme: string = 'light'
    private fontSize: string = '12px'

    private constructor() {}

    public static getInstance(): ConfiguracaoApp {
        if (!ConfiguracaoApp.instance) {
            ConfiguracaoApp.instance = new ConfiguracaoApp()
        }

        return ConfiguracaoApp.instance
    }

    get showName(): string {
        return this.name
    }

    set changeName(value: string) {
        this.name = value
    }

    get showVersion(): string {
        return this.version
    }

    set changeVersion(value: string) {
        this.version = value
    }

    get showTheme(): string {
        return this.theme
    }

    set changeTheme(value: string) {
        this.theme = value
    }

    get showFontSize(): string {
        return this.fontSize
    }

    set changeFontSize(value: string) {
        this.fontSize = value
    }
}