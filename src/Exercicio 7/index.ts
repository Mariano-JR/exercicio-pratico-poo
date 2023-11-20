import { ConfiguracaoApp } from "./ConfiguracaoApp"

export const exerc7 = () => {
    const appConfig = ConfiguracaoApp.getInstance()
    const appConfig2 = ConfiguracaoApp.getInstance()

    console.log('\n***** Exercicio 7 *****')
    console.log('Primeira instancia antes das alterações: ', appConfig)
    //Setters
    appConfig.changeName = 'My New Application'
    appConfig.changeVersion = '1.1.0'
    appConfig.changeTheme = 'dark'
    appConfig.changeFontSize = '18px'
    //Getters
    console.log(`
    Primeira pós alterações, name:     ${appConfig.showName}
    Primeira pós alterações, version:  ${appConfig.showVersion}
    Primeira pós alterações, theme:    ${appConfig.showTheme}
    Primeira pós alterações, fontSize: ${appConfig.showFontSize}
    `)

    console.log('\nSegunda instancia: ', appConfig2, '\n')
    console.log('A primeira instancia é a mesma da segunda? ', appConfig === appConfig2) 
}