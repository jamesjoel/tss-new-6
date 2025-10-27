let gst = (p, x=1) => {

    if(x==1)
    {
        let y = p * 5 / 100;
        let mrp = p + y;
        console.log(mrp)
    }
    if(x==2)
    {
        let y = p * 8 / 100;
        let mrp = p + y;
        console.log(mrp)
    }
    if(x==3)
    {
        let y = p * 18 / 100;
        let mrp = p + y;
        console.log(mrp)
    }
    if(x==4)
    {
        let y = p * 30 / 100;
        let mrp = p + y;
        console.log(mrp)
    }


}

gst(12000, 2)
gst(800, 3)
gst(1500)


/*
    1       5%
    2       8%
    3       18%
    4       30%




task 1 ---- gst(45000, 4)
task 2 ----  bonus(20000, 21, m)
    condi 1 ------ if age is blow 25 then bonus will be 10% of salary
    condi 2 ------ if age is more 25 then bonus will be 8% of salary
    condi 3 ------ if gender is 'f' then extra 5% of bonus

bonus(15000, 22, 'm')
bonus(15000, 27, 'm')
bonus(15000, 27, 'f')

task 3 ----- mark(89)
    condi 1 -------- if mark is more then 85 --- bio/math/comm/art
    condi 2 -------- if mark is more then 75 --- math/com/art
    condi 3 -------- if mark is more then 65 --- com/art
    condi 4 -------- if mark is more then 55 --- art

task 4 ----- family(5000, 3000, 4000)
    condi 1 ------------ total yealy 150000 less --- BPL
    condi 2 ------------ total yealy 151000 to 300000 less --- Avg
    condi 3 ------------ total yealy 300001 to 1000000 less --- Middle
    condi 4 ------------ total yealy 1000001 to 2000000 less --- Upper Middle
    condi 4 ------------ total yealy 2000001 more --- High


family(8000, 6000, 7000)
family(8000, 6000) --- third parameter default 0
family(8000) --- second & third parameter default 0

*/