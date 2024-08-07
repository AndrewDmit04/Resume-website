import securityCamera from './projectImages/securityCamera/securityCamera.png'
import securityCameraGif from './projectImages/securityCamera/vidGif.gif'

import FlutterNotes from './projectImages/flutterNotes/flutter.png'
import FlutterNotesGif from './projectImages/flutterNotes/FlutterAppdisplay.gif'

const projects = [
    {
        "title": "Cloud Security Camera",
        "image": securityCamera,
        "imageGif": securityCameraGif,
        "description": `This project employs a front-end React app 
        and a back-end Python Flask app to deliver a live feed over the local network. 
        It has a file management system which stores and records videos that can be accessed through 
        the front end.`,
    },
    {
        "title": "Flutter Notes app",
        "image": FlutterNotes,
        "imageGif": FlutterNotesGif,
        "description": `Built with Flutter and integrated with Firebase, it provides secure cloud storage, real-time sync, 
        and user authentication. 
        Users can create, edit, 
        and delete notes, ensuring their data is always backed up and accessible across devices.`,
    },
]
export default projects