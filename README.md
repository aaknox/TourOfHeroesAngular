# Angular Basics
## *For more help learning Angular, please visit their website [here](https://angular.io/).*

1. Install Angular CLI
- Make sure Node and NPM are installed prior to this step. You can check using `npm --version` and `node --version`
- Install Angular CLI using: `npm install -g @angular/cl`.
    - DEBUG NOTE: if permission error occur, use `sudo npm install -g @angular/cli`
- Check that the installation was successful. Run `ng --version`. Current version is 11.1.0
    - DEBUG NOTE: Ever need help? Use `ng --help`

2. Make a new Angular project
- Cd into your desired directory for your project from terminal. 
- Run `ng new <your-project-name>`. The CLI will prompt for three things:
    a. strict typing - enforces strict mode to prevent type coercion
    b. routing - I always say yes to save time. 
        You can generate your own router later using `ng g m [ModuleName] --routing`
    c. your stylesheet language(CSS, SASS, LESS, etc.)
- Then the app builds up the base project structure for you! (This may take a few minutes)
    - DEBUG NOTE: Angular CLI may have different performance speed based on the user's CPU power or RAM available. If app or terminal is taking a very long time, there is an alternate way to run Angular applications using [StackBlitz](https://stackblitz.com/). This alternative may be slightly outdated but will allow associates to see how Angular works without worrying about processing power. Dependency injections work differently with this alternative however.

3. Cd into your new project

4. If built correctly, you should be able to do `ng serve -o` to run your new app in the browser.
    - Here, the CLI will compile your TS code into runnable JS and open a window in your default browser
    - The default port for Angular apps is port 4200
    - FUN FACT: 
        a. In the package.json, under the scripts section, change the start command from `ng serve` to `ng serve -o`
        b. Then in the terminal, run `npm run start` --> same as using `ng serve -o`
    - If you see the default Angular content, congrats!!

5. Time to make your own components
    - In the `src` folder, within the contained `app` folder, create a new folder called `components`
    - From terminal, run `cd src/app/components` 
    - To create a component, do `ng generate component [Component-Name]` or `ng g c [component-name]`. 
        a. Beware that the file structure for all generated component will be: 
        `[given-component-name].component.[file-extensiion]`
    - It will generate neccessary files.
    - Make sure it's properly routed before continuing.
        a. Keep it simple for now.
        Copy this block of code:
        ```
        //Step 0: Make sure to have "Auto Import" installed in VSCode as an extension
        import { LoginComponent } from './components/login/login.component';
        import { NgModule } from '@angular/core';
        import { RouterModule, Routes } from '@angular/router';

        //Step 1: Witin routes array, define your new component and desired endpoint within an object
        //Step 2: That's it (for now)!!
        const routes: Routes = [
            {
                path: 'login',
                component: LoginComponent
            }
        ];

        @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
        })
        export class AppRoutingModule { }
        ```
    - Test the route by serving up the app (make sure to be back in the root project folder first). Go to your new endpoint in your browser. If all goes well, you should be seeing your new component at that endpoint.

    6. Install a dependency (I am using GSAP library for example)
        - `npm install gsap`
        - using library as stated in documentation [here](https://greensock.com/docs/v3)
        - see how that works

    7. Let's display a list of heroes

    8. Let's add some new heroes

    9. Let's send some HTTP requests to our backend

    10. Let's navigate to our about section

    11. Let's test our application

    12. Other important notes about Angular:
        - Purpose of `enviroment.ts`/`tsconfig.json`/`tslint.json` files
        - Static assets (i.e. images, fonts, etc) in Angular
        - Cross-origin Resource Sharing: How to Overcome Them in Angular
