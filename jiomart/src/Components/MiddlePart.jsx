import { Box } from "@chakra-ui/react";
import {useState} from "react"
import SimpleImageSlider from "react-simple-image-slider"
import { Image,Heading} from '@chakra-ui/react'
import TopDeal from "./TopDeal"

const images=[
{
        url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657775644_Mumbai_Web_JioMart_1.jpg",
} ,   

{url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1658244944_1658232168_Dairy-Bakery_1680-x-320-_sugar-strip.jpg",
}, 

{url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657897108_1657641245_1657556677_1657205534_JioMart-Best-Selling-Electronics-Carousel-Banner-27_05_2022.jpg",
},
{    url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1658255192_July_20_Banner-1_web.jpg",
} ,
{   url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1658234910_Noodle-Soups--Pasta_1680x320.jpg",
},
{    url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657648803_Snacking_-West_1680x320.jpg",
} ,
{   url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1658245736_1657208661_1657206255_1656949688_1656689828_Detergent_1680x320_new.jpg",
} ,
{   url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1658236536_sugar-salt--jaggary_1680x320.jpg",
},
{    url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1658255192_July_20_Banner-1_web.jpg"
}
];

const  TopCategories=[
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109073_1654018509_Fruits-Veg.jpg"
    },
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109088_1654018530_Beverage-Corner.jpg"
    },
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109143_1656693044_Foodgrains-Oils.jpg"
    },
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109179_1654018570_Snacks-FOOD.jpg"
    },
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109205_1654018587_Home-care.jpg"
    },
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109260_1654018604_personal-Care.jpg"
    },
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109280_1654018629_Dairy-Bakery.jpg"
    },
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109301_1654018647_Instant-Foods.jpg"
    },
    {
        ImgData:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109327_1654018658_Home-Kitchen.jpg"
    }
];

export default function MiddlePart(){

// console.log(TopCategories)
 const [data,setData]=useState(TopCategories)
 console.log(data)
    return (
        <>
        {/* <h1>MiddlePart</h1> */}
        <SimpleImageSlider
        width={1496}
        height={324}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        />
        <Box>
            <Image m="auto"  w="90%"  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1656959459_monsoon-umberalla_1280-x-137.jpg" alt="" />
        </Box>
        <Box>
            <Image m="auto"  w="90%"  src=" https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg" alt="" />
        </Box>
        <Box>
            <Image m="auto"  w="90%"  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1658255337_July_20_Slim-banner-web.jpg" alt="" />
        </Box>

        <Box>
            <Image m="auto"  w="90%"  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1658340139_Camp_A_new_web.jpg
                " alt="" />
        </Box>
        {/* Shop from Top Categories */}
        <Heading  as ='h6' size='md' p="18px">
        Shop from Top Categories
        </Heading>
       <Box w="95%" display="flex"  gap="4px" m="auto">
        {
            data.map((item)=>(
                <Box  >
                    <Image  src={item.ImgData}></Image>
                </Box>
            ))
        }
       </Box>

       <Box>
            <Image m="auto"  w="90%"  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg" alt="" />
        </Box>
        <Box>
            <TopDeal/>
        </Box>
      

       </>
    )
}