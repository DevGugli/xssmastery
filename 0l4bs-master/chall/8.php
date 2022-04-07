<?php
if(!isset($_GET['status'])) {
header('Location: 8.php?status=xssmastery');
}
?>
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>XSS Labs | XSSMASTERY</title>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css'>
<link rel='stylesheet' href='./img/style.css'>
  </head>
  <body>
<!-- partial:index.partial.html -->
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-3 is-flex">
          <div class="column-child sidebar shadow">
            <div class="sidebar-header has-text-centered"><br>
            <div class="photo"><img src="img/logo.png" width="250px"/></div>              
            <h5>Cross-site scripting labs for web application security enthusiasts</h5>
              <div class="social-icons">
                <a><i class="fab fa-facebook icon"></i></a>
                <a><i class="fab fa-github icon"></i></a>
                <a><i class="fab fa-instagram icon"></i></a>
              </div>
              
            </div>
          </div>
        </div>
        <div class="column is-flex">
          <div class="column-child terminal shadow">
            <div class="terminal-bar dark-mode">
              <div class="icon-btn close"></div>
              <div class="icon-btn min"></div>
              <div class="icon-btn max"></div>
              <div class="terminal-bar-text is-hidden-mobile dark-mode-text">enigma@xssmastery: ~</div>
            </div>
            <div class="terminal-window primary-bg" onclick="document.getElementById('dummyKeyboard').focus();">
              <div class="terminal-output" id="terminalOutput">
                <div class="terminal-line">
                  <span class="help-msg">Chall 8 — Clue : <span class="code">Removes Alert</span> </span>
                </div>
              </div>
              <div class="terminal-line">
  
              <?php
          if(isset($_GET['status'])) {
            $status =  $_GET['status'];

          $status = preg_replace('/alert/', '', $status);

          echo $status;
          }
          ?>

                   <br><br>
                <span class="success">Happy</span> <span class="directory">hacking ^_^</span> <span class="user-input" id="userInput"></span>
              </div>
            </div>
            <br>
            <button style="align:right;" class="button is-info is-outlined is-small"><a href="/xss-labs">Home</a></button> | 
            <button style="align:right;" class="button is-link is-outlined is-small"><a href="7.php">Previous Chall</a></button>
            <button style="align:right;" class="button is-link is-outlined is-small"><a href="9.php">Next Chall</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Support by <i class="fas fa-heart icon"></i> XSSMASTERY.
      </p>
    </div>
  </footer>
</section>
<!-- partial -->
  <script src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'></script><script  src="./script.js"></script>

</body>

</html>