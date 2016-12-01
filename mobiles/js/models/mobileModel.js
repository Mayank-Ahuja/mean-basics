app.factory("mobileFactory",function(){
    var object = {
        getMobiles:function(){
            var mobileData=[
                {pic:'../../images/6s.jpeg',name:'i-phone 6s Rose Gold',features:'4.7 inches, 750 x 1334 pixels (~326 ppi pixel density), iOS 9, upgradable to iOS 9.3.2, Apple A9 Dual-core 1.84 GHz Twister processor, 12MP rear and 5MP front camera, 16/64/128 GB inernal, 2 GB RAM',price:'8815'},
                {pic:'../../images/s7.jpeg',name:'Samsung Galaxy S7 edge',features:'5.5 inches 1440 x 2560 pixels (~534 ppi pixel density), Corning Gorilla Glass 4, Android OS, v6.0 (Marshmallow), Snapdragon 820 2.2 GHz octa core rocessor, 32/64 GB internal exandable upto 256GB, 4 GB RAM, 12MP front and 5MP rear camera',price:'8189'},{pic:'../../images/motog4plus.jpg',name:'Moto G4 Plus', features:'5.5 inches 1080 x 1920 pixels (~401 ppi pixel density), Corning Gorilla Glass 3, Android OS, v6.0.1 (Marshmallow), Qualcomm MSM8952 Snapdragon 617 1.3 GHz Hexa cre Processor, 16/32/64 GB internal memory expandable upto 256 GB, 3/4 GB RAM, 16 MP front and 5MP rear camera',price:'8845'},{pic:'../../images/nexus 6p.jpeg',name:'Huawei Nexus 6P',features:'5.7 inches 1440 x 2560 pixels (~518 ppi pixel density), Corning Gorilla Glass 4, Android OS, v6.0 (Marshmallow), Qualcomm MSM8994 Snapdragon 810 1.7 GHz octa core processor, 32/64/128 GB internal memory, 3 GB RA, 12.3MP front and 8MP rear camera',price:'3489'},{pic:'../../images/one plus3.jpg',name:'OnePlus 3',features:'5.5 inches 1080 x 1920 pixels (~401 ppi pixel density), Corning Gorilla Glass 4, Android OS, v6.0.1 (Marshmallow) oxygen OS, Qualcomm MSM8996 Snapdragon 820 1.8 GHz octa core processor, 64 GB internal memory, 6GB RAM, 16MP front and 8MP rear camera',price:'2594'},{pic:'../../images/note3.jpeg',name:'Xiaomi Redmi Note 3',features:'5.5 inches 1080 x 1920 pixels (~403 ppi pixel density), Android OS, v5.1.1 (Lollipop) MIUI 7.0, Qualcomm MSM8956 Snapdragon 650 1.6 GHz Hexa Core Processor, 16/32 GB internal memory exxpandable upto 256GB, 3/4 GB RAM, 16MP front and 5MP rear camera',price:'1894'}
            ]
            return mobileData;
        }
    }
    return object;
})