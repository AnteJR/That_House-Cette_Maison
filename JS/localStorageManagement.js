/*
    CETTE FONCTION VÉRIFIER QU'UN LOCALSTORAGE SOIT DISPONIBLE.
 */
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (storage && storage.length !== 0);
    }
}

function playKeyType(){
    let monAudioNbr = Math.round(Math.random()*7)+1;
    document.getElementById("key"+monAudioNbr).muted = false;
    document.getElementById("key"+monAudioNbr).play();
}