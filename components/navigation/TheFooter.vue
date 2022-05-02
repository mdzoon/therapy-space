<template>
  <div class="footer-wrapper">
    <hr>
    <div class="container">
      <div class="row py-4 footer-inner">
        <div class="col-md-6">
          <nav class="nav flex-row text-left">
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/privacy-policy">Privacy Policy</a>
          </nav>
        </div>
        <div class="col-md-6 text-right">
          <div>
            Copyright &copy; {{ currentYear }} Therapy Space
          </div>
          <div>
            Created by <a href="https://www.michaeldyczkowski.co.uk" target="_blank">Michael Dyczkowski</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
