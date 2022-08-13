<?php include('partials/properties.php'); ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Test Code</title>
	<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
<section>
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<button class="left-head-button">
					<h3>Select Stock Size</h3>
					<p>Save money when you select stock sizes over custom sizes</p>
				</button>		
				<div class="scroll-list-option sizeoptions">
					<?php foreach($properties as $propery) {
						
						echo "<button type='button' data-up='{$propery['unitprice']}'>{$propery['size']}</button>";
						
					}
					?>
					<!-- <button type="button">4" x 4" x 2"</button>
					<button type="button">6" x 6" x 2"</button>
					<button type="button">7" x 6" x 1"</button>
					<button type="button">8" x 5" x 3"</button>
					<button type="button">9" x 6" x 4"</button>
					<button type="button">9" x 8" x 2"</button>
					<button type="button">10" x 8" x 4"</button>
					<button type="button">10" x 9" x 1.5"</button>
					<button type="button">12" x 9" x 2"</button>
					<button type="button">13" x 10" x 5"</button>
					<button type="button">14" x 10" x 4"</button> -->
				</div>	
			</div>
			<div class="col-md-6">
				<div class="image-box">
					<!-- <img src="assets/images/box-2.jpg"> -->
				</div>
				<div class="wrap">
 				
					<label class="switch-text">Closed</label><input type="checkbox" class="switcherinput" id="s3" />
					<label class="switcher" for="s3"></label>  
					<label class="switch-text">Open</label>
				</div><!--/wrap-->
			</div>
			<div class="col-md-3">
				<div class="white-container top-curve">
					<h3>Mailer Box</h3>
					<p>A beautiful and durable box in white corrugated cardboard that's ready for shipping or retail shelves… more</p>
				</div>
				<div class="white-container material item">
					<p class="label">Size</p>
					<span class="value size-value">6" x 6" x 2"</span>
				</div>
				<div class="white-container material item">
					<p class="label">Material</p>
					<span class="value">White</span>
				</div>
				<div class="white-container material item">
					<p class="label">Quantity</p>
					<span class="value selected-qty">250</span>
				</div>
				<div class="white-container material item">
					<p class="label">Unit price</p>
					<span class="value">$1.57</span>
				</div>
				<div class="white-container material item">
					<p class="label">Subtotal</p>
					<span class="value final-price">$392.50</span>
				</div>
				<button class="checkout">Checkout</button>
			</div>

		</div>
	</div>
</section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<script src="assets/js/script.js"></script>
<script src="assets/js/three.js"></script>
<script src="assets/js/box.js"></script>
</body>
</html>