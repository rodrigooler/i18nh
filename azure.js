
/**
 * Azure Translate
 */
class AzureTranslate {
    constructor(azureKey, activeDebug) {
        this.apiKey = azureKey;
        this.debug = activeDebug;
        this.token = null;
    }
  
    shouldGenerateNewToken() {
        return this.token === null || this.isTokenInvalid(this.token)
    }
  
    isTokenInvalid(token) {
      return Math.abs(Math.round((((token.generated - new Date()) % 86400000) % 3600000) / 60000)) >= 10;
    }
  
    async translate ({text, from, to}) {
        if (this.shouldGenerateNewToken()) {
            let headers = new Headers()
            headers.append("Ocp-Apim-Subscription-Key", this.apiKey)
            // Azure API is Crappy and we should send empty String as body,
            let body = "";
        
            let opts = { 
              headers, 
              body,
              method: 'POST',
              mode: 'cors'
            }
            
            this.token = await fetch('https://api.cognitive.microsoft.com/sts/v1.0/issueToken', opts)
            .then(response => response.text())
            .then(token => ({
                value: token,
                generated: new Date()
            }))
        } 
        let headers = new Headers();
        headers.append("Authorization", "Bearer "+this.token.value);
        headers.append("Content-Type", "application/json");
        headers.append("Content-Length", text.length);
  
        let body = JSON.stringify([{
            "Text": text
        }]);
        let opts = {
            headers,
            body,
            method: 'POST',
            mode: 'cors'
        }
        //@TODO: Azure has a list of suported languaages. Should I use it?
        //@TODO: If user doesn`t supply 'from' should I use auto-detect?
        return fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${from}&to=${to}`, opts)
            .then(response => response.text())
            .then(translation => {
                let obj = JSON.parse(translation);
                //@TODO: I should check this first
                return obj[0].translations[0].text
            })
            .then(text => text);
    }
  }
  
  module.exports.AzureTranslate = AzureTranslate