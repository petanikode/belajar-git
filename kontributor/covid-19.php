<?php
$data = file_get_contents('https://api.kawalcorona.com/indonesia');
$decode = json_decode($data, true);
$out = $decode[0];
?>


<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

  <title>Covid-19 Indonesia</title>
</head>

<body>
  <div class="jumbotron">
    <h1 class="display-4 text-center">Covid-19 Tracker <small class="h6">Api by <a href="kawalcorona.com">Kawalcorona.com</a></small></h1>
    <hr class="my-4">
    <div class="text-center">
      <div class="card text-white bg-primary mb-3">
        <div class="card-header h5"><?= $out['name']; ?></div>
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <p class="h6">Sembuh</p>
            <p class="h6 mt-4"><?= $out['sembuh'] ?></p>
          </div>
          <div class="col-md-4 col-sm-12">
            <p class="h6">Positif</p>
            <p class="h6 mt-4"><?= $out['positif'] ?></p>
          </div>
          <div class="col-md-4 col-sm-12">
            <p class="h6">Meninggal</p>
            <p class="h6 mt-4"><?= $out['meninggal'] ?></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <?php
  $data_prov = file_get_contents('https://api.kawalcorona.com/indonesia/provinsi');
  $decode_prov = json_decode($data_prov, true);
  ?>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Daerah</th>
              <th scope="col">Positif</th>
              <th scope="col">Sembuh</th>
              <th scope="col">Meninggal</th>
            </tr>
          </thead>
          <tbody>
            <?php $i = 1; ?>
            <?php foreach ($decode_prov as $loop) : ?>
              <tr>
                <th scope="row"><?= $i; ?></th>
                <td><?= $loop['attributes']['Provinsi']; ?></td>
                <td><?= $loop['attributes']['Kasus_Posi']; ?></td>
                <td><?= $loop['attributes']['Kasus_Semb']; ?></td>
                <td><?= $loop['attributes']['Kasus_Meni']; ?></td>
              </tr>
              <?php $i++ ?>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <footer style="background-color: #eaeaea;height: 120px;">
    <p class="text-center h6 pt-5">&copy; 2020 HafisR <a href="https://github.com/hafisrabbani">github.com/hafisrabbani</a></p>
  </footer>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>

</html>