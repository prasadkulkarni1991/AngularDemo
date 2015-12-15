<html ng-app="enterprise"  >
<head>

</head>

<body >
<div >
    <div>
        <ul>
            <li>
                <a href="#login"><h2>Login</h2></a>
                <a href="#signUp"><h2>SignUp</h2></a>
                <a href="#list"><h2>List</h2></a>
            </li>
        </ul>
    </div>

    <div ng-view></div>


</div>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<script src="http://code.angularjs.org/1.2.1/angular-route.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>


