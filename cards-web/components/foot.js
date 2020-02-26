const Foot = props => (
   <div>
      <script src="/assets/js/core/jquery.min.js" type="text/javascript"></script>
      <script src="/assets/js/core/popper.min.js" type="text/javascript"></script>
      <script src="/assets/js/core/bootstrap.min.js" type="text/javascript"></script>
      <script src="/assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
      <script src="/assets/js/plugins/bootstrap-switch.js"></script>
      <script src="/assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
      <script src="/assets/js/plugins/moment.min.js"></script>
      <script src="/assets/js/plugins/datetimepicker.js" type="text/javascript"></script>
      <script src="/assets/js/plugins/bootstrap-datepicker.min.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
      <script src="../assets/js/argon-design-system.min.js?v=1.2.0" type="text/javascript"></script>
      {/* Firebase code */}
      <script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-analytics.js"></script>

      <script>
         {/* Your web app's Firebase configuration*/}
         var firebaseConfig = {`{
         apiKey: "AIzaSyB4OG1xEw8ZycNXqhyPrw7hrJpOye6D0Ik",
         authDomain: "cards-allotrope.firebaseapp.com",
         databaseURL: "https://cards-allotrope.firebaseio.com",
         projectId: "cards-allotrope",
         storageBucket: "cards-allotrope.appspot.com",
         messagingSenderId: "1088573505479",
         appId: "1:1088573505479:web:430f4a177334c17082a3e2",
         measurementId: "G-6HGHG5LY1D"
      }`};
      {/* Initialize firebase */}
         firebase.initializeApp(firebaseConfig);
         firebase.analytics();
      </script>
   </div>
);

export default Foot;