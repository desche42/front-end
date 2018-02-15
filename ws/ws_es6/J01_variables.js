function bombilla(){
    if (true) {
        var luz = "on";
        // let luz = "on" ;
        console.log("1..." + luz ) ; // on
    }
    console.log("2..." + luz);
    if (true) {
        let lof = "off" ; //esta variable está definida solo aquí
        console.log("3..." + lof) ;
    }
    // console.log("4.." + lof) // reference error not defined
}

bombilla();