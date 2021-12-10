import firebase  from 'firebase';

const setting ={timestampsInSnapshots:true};

const config={
    projectId:'reacat-f866e',
    apiKey:'AIzaSyCJM4G8sXpgKC8DMjD8Wj9jWKA',
    databaseURL:'https://reacat-f663416e-deult-rtdb.firebaseio.com'
}

firebase.initializeApp(config);

export default firebase;
