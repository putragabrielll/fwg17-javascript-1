const biodata = {
    nama : 'Gabriel putra',
    age : 23,
    hobbies : ['Travelling', 'Watch', 'Ngoding'],
    isMarried : false,
    schoolList : [
        {
            nameSchool : 'SMA Advent Purwodadi',
            yearIn : 2015,
            yearOut : 2018,
            major : 'IPS'
        },
        {
            nameSchool : 'Universitas Advent Indonesia',
            yearIn : 2018,
            yearOut : 2022,
            major : 'TI'
        }
    ],
    skills : [
        {
            skillName : 'HTML',
            level : 'advanced'
        },
        {
            skillName : 'CSS',
            level : 'advanced'
        },
        {
            skillName : 'Js',
            level : 'beginner'
        },
        {
            skillName : 'mySQL',
            level : 'beginner'
        }
    ],
    interestInCoding : true
}

console.log(biodata.schoolList[1].nameSchool)