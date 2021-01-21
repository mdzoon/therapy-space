<template>
  <div class="container-fluid footer-wrapper">
    <hr>
    <div class="row">
      <div class="container">
        <div class="row contact-wrapper">
          <div class="col-md-6">
            <nav class="nav flex-column text-left">
              <a class="nav-link" href="/">Home</a>
              <a class="nav-link" href="/privacy-policy">Privacy Policy</a>
            </nav>
          </div>
          <div class="col-md-6 text-right">
            <div>
              Copyright &copy; {{ currentYear }} Therapy Space
            </div>
            <div>
              Created by <a href="https://www.michaeldyczkowski.co.uk">Michael Dyczkowski</a>
            </div>
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
