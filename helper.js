
export function nav(to){
    // console.log(event.target.value);

    document.getElementById(to).scrollIntoView({behavior:"smooth"});
}