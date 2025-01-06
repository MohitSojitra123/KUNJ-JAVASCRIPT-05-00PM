

    console.log("1 For Jethalal ki Salary Ka Hisab!");
    console.log("2 For Tapu Sena Ka Fun Experiment!");
    console.log("3 For Bhide Sir Ke Students Ka Result!");
    console.log("4 For Grocery Billing - Dayaben Ki Garba Shopping!");
    console.log("5 For Interest Calculator - Popatlal Ka Shaadi Fund!");
    console.log("6 For Salary Slip - Taarak Mehta Ki Bonus Calculation!");
    console.log("7 For Suspense Twist - Society Ki Khushi Ka Raaz!");

    let user_choise=4;
    
    console.log("---------------------------------------------------");
    
    switch (user_choise) {
        case 1:
            console.log("Choose Jethalal ki Salary Ka Hisab!");
            console.log("---------------------------------------------------");

             let salary=150000;

             console.log("Jethalal Ki Salary Ko Addition...",salary+salary);
             console.log("Jethalal Ki Salary Ko Subtraction...",salary-salary);
             console.log("Jethalal Ki Salary Ko Multiplection...",salary*2);
             console.log("Jethalal Ki Salary Ko Divide...",salary/2);
             console.log("Jethalal Ki Salary Ko Mode...",salary%2);

            break;
            case 2:
                console.log("Choose Tapu Sena Ka Fun Experiment!");
                console.log("---------------------------------------------------");
                
                let ran_1=Math.floor(Math.random() * 10);
                let ran_2=Math.floor(Math.random() * 10);

                console.log(` random 1 =>  ${ran_1} and random 2 => ${ran_2}`);

                let temp=ran_1;
                ran_1=ran_2;
                ran_2=temp;

                console.log(`Swap Value Is... random 1 => ${ran_1} random 2 => ${ran_2} `);

                break;
                case 3:
                    console.log("Choose Bhide Sir Ke Students Ka Result!");
                    console.log("---------------------------------------------------");

                    let mark=90;

                    if(mark>=90){
                      console.log("A1");
                      console.log("Topper of the Class");
                    }else if(mark>=75 && mark<=89){
                       console.log("A2");
                       console.log("Good Effort");
                    }else if(mark>=50 && mark<=74){
                        console.log("B");
                        console.log("Need Improvement");
                    }else if(mark<50){
                        console.log("Fail - Padho Beta Padho");
                    }
                    
                    break;
                    case 4:
                        console.log("Choose Grocery Billing - Dayaben Ki Garba Shopping!");
                        console.log("---------------------------------------------------");

                        let product_1=Math.floor(Math.random() * 1000);
                        let product_2=Math.floor(Math.random() * 1000);
                        let product_3=Math.floor(Math.random() * 1000);
                        let product_4=Math.floor(Math.random() * 1000);
                        let product_5=Math.floor(Math.random() * 1000);

                        console.log("item 1 price => ",product_1); 
                        console.log("item 2 price => ",product_2); 
                        console.log("item 3 price => ",product_3); 
                        console.log("item 4 price => ",product_4); 
                        console.log("item 5 price => ",product_5); 

                        let grocery_bill=product_1+product_2+product_3+product_4+product_5/10;

                        console.log(grocery_bill);



                        break;
                        case 5:
                            console.log("Choose Interest Calculator - Popatlal Ka Shaadi Fund!");
                            console.log("---------------------------------------------------");

                            let value=Math.floor(Math.random() * 10000);
                            let rate=7;
                            let time=Math.floor(Math.random()*5);

                            console.log("Value ==> ",value);
                            console.log("Rate ==> ",rate);
                            console.log("Time ==> ",time);
                            
                            let shaadi_fund=value*rate*time/100

                            console.log("Simple Intrest...",);

                            break;
                            case 6:
                                console.log("Choose Salary Slip - Taarak Mehta Ki Bonus Calculation!");
                                console.log("---------------------------------------------------");

                                let basic_salary=Math.floor(Math.random()*1000000);
                                let HRA=20;
                                let DA=10;
                                let Tax=5;

                                console.log("Gross Salary ==> ");
                                console.log("Net Salary ==> ")

                                break;
                                case 7:
                                    console.log("Choose Suspense Twist - Society Ki Khushi Ka Raaz!");
                                    console.log("---------------------------------------------------");

                                    if(grocery_bill>1000){
                                       console.log("Dayaben ki Garba Shopping Successful!");
                                    }else if(shaadi_fund>50000){
                                        console.log("Shaadi fix kar lo, Popatlal!");
                                    }else{
                                        console.log("Taarak Mehta ka Balance Perfect Hai!");
                                    }
                                    break;
                             
                                    
                                    default:
                                        console.log("Choose Right Option...");
                                        console.log("---------------------------------------------------");
            break;
    }



