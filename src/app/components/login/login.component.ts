import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tl = gsap.timeline();

    tl
      .from('.navbar', {
        y: -200,
        duration: 3,
        ease: 'power2.inOut'
      })
      .addLabel('navbarDown')
      .fromTo('.n1',
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.5,
          duration: 1.4,
          ease: 'power2.inOut'
        },
        'navbarDown+=.9')
        .fromTo('.n2',
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.5,
          duration: 1.4,
          ease: 'power2.inOut'
        },
        'navbarDown+=1.2')
        .fromTo('.n3',
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.5,
          duration: 1.4,
          ease: 'power2.inOut'
        },
        'navbarDown+=1.6')
        .fromTo('.title',
        {
          opacity: 0,
          y: -100
        },
        {
          opacity: 1,
          y: 0,
          duration: .8,
          ease: 'power2.inOut'
        },
        'navbarDown-=.05')
        .fromTo('.d-flex',
        {
          opacity: 0,
          y: -100
        },
        {
          opacity: 1,
          y: 0,
          duration: .8,
          ease: 'power2.inOut'
        },
        'navbarDown-=.05');
  }

}
