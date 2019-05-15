import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="container homepage animated fadeIn vertical-center">
              <div class="row justify-content-center align-items-center">
                <div class="col-md">
                  <h1 class="left">
                    <span class="highlight">Hello,</span>
                    I'm a web
                    <br>
                    developer based in Bengaluru.
                  </h1>
                  <h3>Currently I'm working full time, however, I'm open for freelance work.</h3>
                  <a target="_blank" href="https://github.com/theanuraggupta">
                    <button class="btn btn-primary" type="button">
                      Explore Projects
                    </button>
                  </a>
                  <a href="mailto:email@anuraggupta.in?Subject=Hello%20Anurag" class="hidden-sm">
                    <button class="btn btn-secondary" type="button">
                      Contact Me
                    </button>
                  </a>
                </div>
              </div>
            </div>`
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
