function addUrlQueryParamsToUrlString (params, url){
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            if(url.indexOf(key + '=') === -1){
                if(params[key] === null){
                    console.error("Not adding null param "+key);
                    continue;
                }
                if(url.indexOf('?') === -1){
                    url = url + "?" + key + "=" + encodeURIComponent(params[key]);
                } else {
                    url = url + "&" + key + "=" + encodeURIComponent(params[key]);
                }
            }
        }
    }
    return url;
}
function getSubDomain(){
    var full = window.location.host;
    var parts = full.split('.');
    return parts[0].toLowerCase();
}
function getClientIdFromSubDomain(){
    var appConfigFileNames = {
        "app" : "quantimodo",
        "energymodo" : "energymodo",
        "default" : "default",
        "ionic" : "quantimodo",
        "local" : "quantimodo",
        "medimodo" : "medimodo",
        "mindfirst" : "mindfirst",
        "moodimodo" : "moodimodo",
        "oauth" : "quantimodo",
        "quantimodo" : "quantimodo",
        "staging" : "quantimodo",
        "utopia" : "quantimodo",
        "your_quantimodo_client_id_here": "your_quantimodo_client_id_here"
    };
    if(window.location.hostname.indexOf('.quantimo.do') === -1){return null;}
    var subDomain = getSubDomain();
    subDomain = subDomain.replace('qm-', '');
    if(subDomain === 'web' || subDomain === 'staging-web'){return null;}
    var clientIdFromAppConfigName = appConfigFileNames[subDomain];
    if(clientIdFromAppConfigName){return clientIdFromAppConfigName;}
    console.debug('Using subDomain as client id: ' + subDomain);
    return subDomain;
}
function redirectToIonic(stateName){
    let newUrl = "https://web.quantimo.do/#/app/"+stateName;
    if(window.location.search){newUrl += window.location.search;}
    if(window.location.search.indexOf('client') === -1){
        let clientId = getClientIdFromSubDomain();
        if(clientId){newUrl = addUrlQueryParamsToUrlString({clientId: clientId}, newUrl);}
    }
    console.log("Going to "+newUrl);
    window.location.href = newUrl;
}
function redirectToBuilder(){
    let newUrl = "https://builder.quantimo.do/#/app/configuration";
    if(window.location.search){newUrl += window.location.search;}
    if(window.location.search.indexOf('client') === -1){
        let clientId = getClientIdFromSubDomain();
        if(clientId){newUrl = addUrlQueryParamsToUrlString({clientId: clientId}, newUrl);}
    }
    console.log("Going to "+newUrl);
    window.location.href = newUrl;
}
function redirectToLaravel(path){
    let newUrl = "https://web.quantimo.do/#/app/"+stateName;
    if(window.location.search){newUrl += window.location.search;}
    if(window.location.search.indexOf('client') === -1){
        let clientId = getClientIdFromSubDomain();
        if(clientId){newUrl = addUrlQueryParamsToUrlString({clientId: clientId}, newUrl);}
    }
    console.log("Going to "+newUrl);
    window.location.href = newUrl;
}
