import firebase from 'firebase'

var fire = firebase.initializeApp(
	{
		apiKey: "AIzaSyAKkeYEno7MYy9nhn4QjYQEVfxGIkp0FcA",
		authDomain: "cookbook-1a91d.firebaseapp.com",
		databaseURL: "https://cookbook-1a91d.firebaseio.com",
		projectId: "cookbook-1a91d",
		storageBucket: "cookbook-1a91d.appspot.com",
		messagingSenderId: "1083763890339"
	}
);

export default fire;
