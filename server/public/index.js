<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Enter</title>
</head>
<body>
<form className ='card yellow lighten-4'>
          <h5>Enter the system</h5>
              <div>
                  <label htmlFor="login">Login</label>
                  <input type="text" />
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password"/>
              </div>
              <select className= 'browser-default '>
                <option value="seller">Seller</option>
                <option value="manager">Manager</option>
              </select>

              <button className = 'btn btn-flat center'>
                                Sumbit</button>
          </form>
</body>
</html>