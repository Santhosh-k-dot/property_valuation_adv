import React, { useState, useMemo, useCallback } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography,
    Grid, Card, CardContent, CardMedia, Box, IconButton
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Adv_SearchBar from './Adv_SearchBar'; // Search Bar Component
const sampleProperties = {
    1: [
        {
            id: '1-1',
            name: 'Urbtech Xavier',
            price: '₹36,50,000',
            location: 'Sector 168, Noida',
            pincode: '201301',
            propertyType: '1, 2, 3, 5 BHK',
            category: 'Studio Apartment, Apartment, Residential',
            image: 'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-2.jpeg',
            details: 'This apartment offers premium amenities like a gym, pool, 24/7 security, and power backup.',
            images: [
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-1.jpeg',
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-2.jpeg',
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-3.jpeg'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'June 28, 2024 at 11:56 am' },
                { label: 'Price', value: '₹49,00,000' },
                { label: 'Project Area', value: '8 Acres' },
                { label: 'Bedroom', value: '1, 2, 3, 4' },
                { label: 'Property Type', value: 'Apartment, Residential' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move or OC Obtained' },
                { label: 'Ownership type', value: 'Leasehold' },
                { label: 'Possession Date', value: 'By 2014' },
                { label: 'Finishings', value: 'Semi Furnished' },
                { label: 'Floors', value: '14' },
                { label: 'Transaction Type', value: 'Primary & Secondary' }
            ],
            floorPlans: [
                {
                    title: '3 BHK Apartment',
                    size: '2600 Sqft',
                    bedrooms: 3,
                    bathrooms: 3,
                    price: '₹3,77,00,000',
                },
                {
                    title: '4 BHK Apartment',
                    size: '3728 Sqft',
                    bedrooms: 4,
                    bathrooms: 5,
                    price: '₹5,40,00,000',
                },
            ],
            amenities: [
                '✔️ 24*7 Gated Community',
                '✔️ Gym',
                '✔️ Power Backup',
                '✔️ Air Conditioning',
                '✔️ Jacuzzi',
                '✔️ Reserved Parking',
                '✔️ Basketball Court',
                '✔️ Swimming Pool',
                '✔️ Car Parking',
                '✔️ Lift',
                '✔️ Tennis Court',
                '✔️ Club',
                '✔️ Multi-Purpose Court',
                '✔️ Golf Course',
                '✔️ Park',
            ]
        },
        {
            id: '1-2',
            name: 'Paarth Aryavarta Empire',
            price: 'Price On Request',
            location: 'Sushant Golf City, Lucknow',
            pincode: '226030',
            propertyType: '1, 2, 3 BHK',
            category: 'Studio Apartment, Apartment, Residential',
            image: 'https://myrealestate.in/storage/2023/11/Paarth-Aryavarta-Empire-MRE-Img-4.jpg',
            details: 'Premium apartments with proximity to a golf course and world-class amenities.',
            images: [
                'https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-9-Aryavart-Empire-Lucknow-5094463_503_800_310_462.jpg',
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-3.jpeg',
                'https://myrealestate.in/storage/2023/11/Paarth-Aryavarta-Empire-MRE-Img-4.jpg'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'June 28, 2024 at 11:56 am' },
                { label: 'Price', value: '₹49,00,000' },
                { label: 'Project Area', value: '8 Acres' },
                { label: 'Bedroom', value: '1, 2, 3, 4' },
                { label: 'Property Type', value: 'Apartment, Residential' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move or OC Obtained' },
                { label: 'Ownership type', value: 'Leasehold' },
                { label: 'Possession Date', value: 'By 2014' },
                { label: 'Finishings', value: 'Semi Furnished' },
                { label: 'Floors', value: '14' },
                { label: 'Transaction Type', value: 'Primary & Secondary' }
            ],
            floorPlans: [
                {
                    title: '3 BHK Apartment',
                    size: '2600 Sqft',
                    bedrooms: 3,
                    bathrooms: 3,
                    price: '₹3,77,00,000',
                },
                {
                    title: '4 BHK Apartment',
                    size: '3728 Sqft',
                    bedrooms: 4,
                    bathrooms: 5,
                    price: '₹5,40,00,000',
                },
            ],
            amenities: [
                '✔️ 24*7 Gated Community',
                '✔️ Gym',
                '✔️ Power Backup',
                '✔️ Air Conditioning',
                '✔️ Jacuzzi',
                '✔️ Reserved Parking',
                '✔️ Basketball Court',
                '✔️ Swimming Pool',
                '✔️ Car Parking',
                '✔️ Lift',
                '✔️ Tennis Court',
                '✔️ Club',
                '✔️ Multi-Purpose Court',
                '✔️ Golf Course',
                '✔️ Park',
            ]
        },
        {
            id: '1-3',
            name: 'Spring Meadows Apartments',
            price: '₹45,00,000',
            location: 'Kharghar, Navi Mumbai',
            pincode: '410210',
            propertyType: '1, 2, 3 BHK',
            category: 'Apartment, Residential',
            image: 'https://res.cloudinary.com/jll-global-gdim/image/upload/IN/Horizon/Resi/Prod/JLL_Bengaluru_Concorde%20Spring%20Meadows_436_EXT_2.png',
            details: 'Modern apartments with scenic views and premium finishes.',
            images: [
                'https://res.cloudinary.com/jll-global-gdim/image/upload/IN/Horizon/Resi/Prod/JLL_Bengaluru_Concorde%20Spring%20Meadows_436_EXT_2.png',
                'https://res.cloudinary.com/jll-global-gdim/image/upload/IN/Horizon/Resi/Prod/JLL_Bengaluru_Concorde%20Spring%20Meadows_436_EXT_2.png',
                'https://res.cloudinary.com/jll-global-gdim/image/upload/IN/Horizon/Resi/Prod/JLL_Bengaluru_Concorde%20Spring%20Meadows_436_EXT_2.png'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'July 10, 2024 at 12:00 pm' },
                { label: 'Price', value: '₹45,00,000' },
                { label: 'Project Area', value: '5 Acres' },
                { label: 'Bedroom', value: '1, 2' },
                { label: 'Property Type', value: 'Apartment, Residential' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move' },
                { label: 'Ownership type', value: 'Freehold' },
                { label: 'Finishings', value: 'Furnished' },
                { label: 'Floors', value: '20' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [
                {
                    title: '2 BHK Apartment',
                    size: '1200 Sqft',
                    bedrooms: 2,
                    bathrooms: 2,
                    price: '₹50,00,000',
                },
            ],
            amenities: [
                '✔️ Gated Community',
                '✔️ Power Backup',
                '✔️ Gym',
                '✔️ Swimming Pool',
                '✔️ Clubhouse',
                '✔️ Children’s Play Area',
                '✔️ CCTV Security',
                '✔️ Jogging Track',
                '✔️ Parking',
            ]
        },
        {
            id: '1-4',
            name: 'Lakeview Heights',
            price: '₹30,00,000',
            location: 'Hinjewadi, Pune',
            pincode: '411057',
            propertyType: '1, 2 BHK',
            category: 'Apartment, Residential',
            image: 'https://www.tagaytay-highlands.com/uploads/3/1/9/2/3192807/published/4712467.jpg?1665638995',
            details: 'Contemporary living spaces with a stunning view of the lake.',
            images: [
                'https://www.tagaytay-highlands.com/uploads/3/1/9/2/3192807/published/4712467.jpg?1665638995',
                'https://www.tagaytay-highlands.com/uploads/3/1/9/2/3192807/published/4712467.jpg?1665638995',
                'https://www.tagaytay-highlands.com/uploads/3/1/9/2/3192807/published/4712467.jpg?1665638995'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'August 15, 2024 at 3:30 pm' },
                { label: 'Price', value: '₹30,00,000' },
                { label: 'Project Area', value: '3 Acres' },
                { label: 'Bedroom', value: '1, 2' },
                { label: 'Property Type', value: 'Apartment, Residential' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move' },
                { label: 'Ownership type', value: 'Freehold' },
                { label: 'Finishings', value: 'Semi Furnished' },
                { label: 'Floors', value: '15' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [
                {
                    title: '1 BHK Apartment',
                    size: '650 Sqft',
                    bedrooms: 1,
                    bathrooms: 1,
                    price: '₹25,00,000',
                },
                {
                    title: '2 BHK Apartment',
                    size: '950 Sqft',
                    bedrooms: 2,
                    bathrooms: 2,
                    price: '₹35,00,000',
                },
            ],
            amenities: [
                '✔️ 24/7 Security',
                '✔️ Swimming Pool',
                '✔️ Gym',
                '✔️ Clubhouse',
                '✔️ Landscaped Gardens',
                '✔️ Indoor Games Room',
                '✔️ Party Hall',
                '✔️ Visitor Parking',
            ]
        }
    ],

    2: [
        {
            id: '2-1',
            name: 'Prestige Willow Tree',
            price: '₹85,00,000',
            location: 'Vidyaranyapura, Bangalore',
            pincode: '560097',
            propertyType: '2, 3 BHK',
            category: 'Independent / Builder Floor, Residential',
            image: 'https://myrealestate.in/storage/2023/11/Paarth-Aryavarta-Empire-MRE-Img-4.jpg',
            details: 'Modern builder floors with high-quality finishes and excellent connectivity.',
            images: [
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-2.jpeg',
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-1.jpeg',
                'https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-9-Aryavart-Empire-Lucknow-5094463_503_800_310_462.jpg'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'July 1, 2024 at 10:30 am' },
                { label: 'Price', value: '₹85,00,000' },
                { label: 'Project Area', value: '6 Acres' },
                { label: 'Bedroom', value: '2, 3' },
                { label: 'Property Type', value: 'Independent / Builder Floor' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move' },
                { label: 'Ownership type', value: 'Freehold' },
                { label: 'Finishings', value: 'Fully Furnished' },
                { label: 'Floors', value: '10' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [
                {
                    title: '2 BHK Builder Floor',
                    size: '1200 Sqft',
                    bedrooms: 2,
                    bathrooms: 2,
                    price: '₹85,00,000',
                },
                {
                    title: '3 BHK Builder Floor',
                    size: '1800 Sqft',
                    bedrooms: 3,
                    bathrooms: 3,
                    price: '₹1,20,00,000',
                },
            ],
            amenities: [
                '✔️ Gated Community',
                '✔️ Power Backup',
                '✔️ Gym',
                '✔️ Lift',
                '✔️ Clubhouse',
                '✔️ Swimming Pool',
                '✔️ Car Parking',
                '✔️ Children’s Play Area',
                '✔️ CCTV Security',
                '✔️ Jogging Track',
                '✔️ Tennis Court',
            ]
        },
        {
            id: '2-2',
            name: 'Shriram Blue',
            price: '₹65,00,000',
            location: 'Whitefield, Bangalore',
            pincode: '560066',
            propertyType: '2, 3 BHK',
            category: 'Independent / Builder Floor, Residential',
            image: 'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-2.jpeg',
            details: 'Luxurious apartments offering seamless access to IT parks and commercial hubs.',
            images: [
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-3.jpeg',
                'https://myrealestate.in/storage/2023/11/Paarth-Aryavarta-Empire-MRE-Img-4.jpg',
                'https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-9-Aryavart-Empire-Lucknow-5094463_503_800_310_462.jpg'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'July 1, 2024 at 10:45 am' },
                { label: 'Price', value: '₹65,00,000' },
                { label: 'Project Area', value: '5 Acres' },
                { label: 'Bedroom', value: '2, 3' },
                { label: 'Property Type', value: 'Independent / Builder Floor' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Under Construction' },
                { label: 'Ownership type', value: 'Freehold' },
                { label: 'Finishings', value: 'Semi Furnished' },
                { label: 'Floors', value: '8' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [
                {
                    title: '2 BHK Builder Floor',
                    size: '1300 Sqft',
                    bedrooms: 2,
                    bathrooms: 2,
                    price: '₹65,00,000',
                },
                {
                    title: '3 BHK Builder Floor',
                    size: '1800 Sqft',
                    bedrooms: 3,
                    bathrooms: 3,
                    price: '₹95,00,000',
                },
            ],
            amenities: [
                '✔️ Gym',
                '✔️ Power Backup',
                '✔️ Air Conditioning',
                '✔️ Reserved Parking',
                '✔️ Lift',
                '✔️ Clubhouse',
                '✔️ Swimming Pool',
                '✔️ Basketball Court',
                '✔️ Jogging Track',
                '✔️ Children’s Play Area',
                '✔️ CCTV Security',
            ]
        }
    ],

    3: [
        {
            id: '3-1',
            name: 'Lodha Palava City',
            price: '₹50,00,000',
            location: 'Dombivli, Mumbai',
            pincode: '421202',
            propertyType: '1, 2, 3 BHK',
            category: 'Apartment, Residential',
            image: 'https://myrealestate.in/storage/2023/11/Paarth-Aryavarta-Empire-MRE-Img-4.jpg',
            details: 'A smart city development offering premium housing with recreational spaces.',
            images: [
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-1.jpeg',
                'https://myrealestate.in/storage/2024/04/Urbtech-Xavier-MRE-Img-3.jpeg'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'July 3, 2024 at 9:00 am' },
                { label: 'Price', value: '₹50,00,000' },
                { label: 'Project Area', value: '20 Acres' },
                { label: 'Bedroom', value: '1, 2, 3' },
                { label: 'Property Type', value: 'Apartment' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move' },
                { label: 'Ownership type', value: 'Freehold' },
                { label: 'Finishings', value: 'Semi Furnished' },
                { label: 'Floors', value: '12' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [
                {
                    title: '1 BHK Apartment',
                    size: '600 Sqft',
                    bedrooms: 1,
                    bathrooms: 1,
                    price: '₹50,00,000',
                },
                {
                    title: '2 BHK Apartment',
                    size: '1200 Sqft',
                    bedrooms: 2,
                    bathrooms: 2,
                    price: '₹80,00,000',
                },
            ],
            amenities: [
                '✔️ Gated Community',
                '✔️ Power Backup',
                '✔️ Gym',
                '✔️ Swimming Pool',
                '✔️ Children’s Play Area',
                '✔️ Jogging Track',
                '✔️ Tennis Court',
                '✔️ Clubhouse',
                '✔️ CCTV Security',
                '✔️ Park',
            ]
        }
    ],

    4: [
        {
            id: '4-1',
            name: 'Meadow Farms',
            price: '₹2,50,00,000',
            location: 'Sector 135, Noida',
            pincode: '201304',
            propertyType: 'Farmhouse',
            category: 'Farmhouse, Commercial',
            image: 'https://content3.jdmagicbox.com/comp/goa/p4/0832px832.x832.220330214704.v2p4/catalogue/valley-meadows-farm-dodamarg-goa-resorts-jxv4miu16j.jpg',
            details: 'Spacious farmhouses with modern amenities, offering peaceful rural living.',
            images: [
                'https://content3.jdmagicbox.com/comp/goa/p4/0832px832.x832.220330214704.v2p4/catalogue/valley-meadows-farm-dodamarg-goa-resorts-jxv4miu16j.jpg',
                'https://content3.jdmagicbox.com/comp/goa/p4/0832px832.x832.220330214704.v2p4/catalogue/valley-meadows-farm-dodamarg-goa-resorts-jxv4miu16j.jpg'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'July 4, 2024 at 2:00 pm' },
                { label: 'Price', value: '₹2,50,00,000' },
                { label: 'Project Area', value: '50 Acres' },
                { label: 'Bedroom', value: 'Farmhouse' },
                { label: 'Property Type', value: 'Farmhouse' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move' },
                { label: 'Ownership type', value: 'Freehold' },
                { label: 'Finishings', value: 'Furnished' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [],
            amenities: [
                '✔️ Gated Community',
                '✔️ Power Backup',
                '✔️ Swimming Pool',
                '✔️ Park',
                '✔️ Parking',
            ]
        },
        {
            id: '4-2',
            name: 'Skyline Business Center',
            price: '₹15,00,000',
            location: 'Sector 62, Noida',
            pincode: '201301',
            propertyType: 'Office Space',
            category: 'Commercial, Office',
            image: 'https://teja12.kuikr.com/is/a/c/655x525/public/images/apartments/original_img/1kaqvn.gif',
            details: 'Modern office spaces with top-notch facilities in a prime location.',
            images: [
                'https://teja12.kuikr.com/is/a/c/655x525/public/images/apartments/original_img/1kaqvn.gif',
                'https://teja12.kuikr.com/is/a/c/655x525/public/images/apartments/original_img/1kaqvn.gif',
                'https://teja12.kuikr.com/is/a/c/655x525/public/images/apartments/original_img/1kaqvn.gif'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'August 10, 2024 at 9:00 am' },
                { label: 'Price', value: '₹15,00,000' },
                { label: 'Area', value: '1000 Sqft' },
                { label: 'Property Type', value: 'Office Space' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move' },
                { label: 'Ownership type', value: 'Freehold' },
                { label: 'Finishings', value: 'Furnished' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [
                {
                    title: 'Office Space Layout',
                    size: '1000 Sqft',
                    price: '₹15,00,000',
                }
            ],
            amenities: [
                '✔️ 24/7 Security',
                '✔️ High-Speed Internet',
                '✔️ Conference Room',
                '✔️ Parking',
                '✔️ Cafeteria',
            ]
        },
        {
            id: '4-3',
            name: 'Retail Plaza',
            price: '₹8,00,000',
            location: 'Sector 15, Faridabad',
            pincode: '121007',
            propertyType: 'Retail Space',
            category: 'Commercial, Retail',
            image: 'https://images1.apartments.com/i2/FIY6PA7T2wa_rJpfoBkU-57DY4rkKo57jvuMt2vIqvQ/117/image.jpg',
            details: 'Prime retail space located in a busy commercial area, ideal for various businesses.',
            images: [
                'https://images1.apartments.com/i2/FIY6PA7T2wa_rJpfoBkU-57DY4rkKo57jvuMt2vIqvQ/117/image.jpg',
                'https://images1.apartments.com/i2/FIY6PA7T2wa_rJpfoBkU-57DY4rkKo57jvuMt2vIqvQ/117/image.jpg',
                'https://images1.apartments.com/i2/FIY6PA7T2wa_rJpfoBkU-57DY4rkKo57jvuMt2vIqvQ/117/image.jpg'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'September 5, 2024 at 11:00 am' },
                { label: 'Price', value: '₹8,00,000' },
                { label: 'Area', value: '600 Sqft' },
                { label: 'Property Type', value: 'Retail Space' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move' },
                { label: 'Ownership type', value: 'Freehold' },
                { label: 'Finishings', value: 'Shell & Core' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [
                {
                    title: 'Retail Space Layout',
                    size: '600 Sqft',
                    price: '₹8,00,000',
                }
            ],
            amenities: [
                '✔️ High Foot Traffic',
                '✔️ Ample Parking',
                '✔️ 24/7 Security',
                '✔️ Air Conditioning',
                '✔️ Nearby Amenities',
            ]
        },
        {
            id: '4-4',
            name: 'TechHub Office Park',
            price: '₹35,00,000',
            location: 'Gurgaon',
            pincode: '122018',
            propertyType: 'Co-working Space',
            category: 'Commercial, Office',
            image: 'https://www.prestigesraintreepark.info/images/prestige/it-parks-in-whitefield.webp',
            details: 'Flexible co-working spaces with modern facilities and community events.',
            images: [
                'https://www.prestigesraintreepark.info/images/prestige/it-parks-in-whitefield.webp',
                'https://www.prestigesraintreepark.info/images/prestige/it-parks-in-whitefield.webp',
                'https://www.prestigesraintreepark.info/images/prestige/it-parks-in-whitefield.webp'
            ],
            propertyName1: [
                { label: 'Updated on', value: 'October 1, 2024 at 4:00 pm' },
                { label: 'Price', value: '₹35,00,000' },
                { label: 'Area', value: '2000 Sqft' },
                { label: 'Property Type', value: 'Co-working Space' },
                { label: 'Property Status', value: 'For Sale' },
                { label: 'Construction Status', value: 'Ready to Move' },
                { label: 'Ownership type', value: 'Leasehold' },
                { label: 'Finishings', value: 'Furnished' },
                { label: 'Transaction Type', value: 'Primary' }
            ],
            floorPlans: [
                {
                    title: 'Co-working Layout',
                    size: '2000 Sqft',
                    price: '₹35,00,000',
                }
            ],
            amenities: [
                '✔️ High-Speed Internet',
                '✔️ Meeting Rooms',
                '✔️ Community Events',
                '✔️ Pantry',
                '✔️ Coffee Shop',
            ]
        }
    ]
};




const AdvPropertyCardBuy = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [filteredProperties, setFilteredProperties] = useState([]);

    const handleSearch = useCallback(({ location, minPrice, maxPrice, pincode }) => {
        const filtered = [];

        Object.values(sampleProperties).forEach((properties) => {
            const matches = properties.filter(({ location: loc, pincode: pin, price }) => {
                const priceValue = parseInt(price.replace(/\D/g, ''), 10);
                return (
                    (!location || loc.toLowerCase().includes(location.toLowerCase())) &&
                    (!pincode || pin.includes(pincode)) &&
                    (!minPrice || priceValue >= parseInt(minPrice)) &&
                    (!maxPrice || priceValue <= parseInt(maxPrice))
                );
            });
            filtered.push(...matches);
        });

        setFilteredProperties(filtered);
    }, []);

    const handleDialogOpen = useCallback((property = null) => {
        setSelectedProperty(property);
        setOpenDialog(true);
    }, []);

    const handleDialogClose = () => {
        setOpenDialog(false);
        setSelectedProperty(null);
    };

    const PropertyCard = ({ property }) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card sx={cardStyles}>
                <CardMedia component="img" height="180" image={property.image} alt={property.name} />
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{property.name}</Typography>
                    <Typography variant="body2">Location: <strong>{property.location}</strong></Typography>
                    <Typography variant="body2">Pincode: <strong>{property.pincode}</strong></Typography>
                    <Typography variant="body2" sx={{ color: '#4caf50', fontWeight: 'bold' }}>{property.price}</Typography>
                    <Typography variant="body2">Type: <strong>{property.propertyType}</strong></Typography>
                    <Typography variant="body2">Category: <strong>{property.category}</strong></Typography>
                    <Button variant="outlined" sx={{ mt: 1 }} onClick={() => handleDialogOpen(property)}>
                        View Details
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );

    const dialogTitle = useMemo(() => selectedProperty?.name || 'Property Details', [selectedProperty]);

    return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
            <Card sx={mainCardStyles}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://images.herzindagi.info/image/2021/May/quick-tips-to-sell-old-property-with-profit.jpg"
                    alt="Buy Your Property"
                    sx={hoverImageStyle}
                />
                <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Buy Your Next Property</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Explore a wide range of properties available for sale with expert assistance to help you find your perfect home.
                    </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', pb: 2 }}>
                    <Button variant="contained" sx={buttonStyles} onClick={() => handleDialogOpen()}>
                        View Available Properties
                    </Button>
                </Box>
            </Card>

            <Dialog open={openDialog} onClose={handleDialogClose} fullScreen fullWidth maxWidth="lg">
                <DialogTitle sx={{ backgroundColor: '#f0f0f0' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>{dialogTitle}</Typography>
                        <IconButton onClick={handleDialogClose}><ArrowForwardIosIcon /></IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: '#fff' }}>
                    {/* Search bar can be passed the function to update the filtered properties */}
                    <Adv_SearchBar onSearch={handleSearch} />
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {filteredProperties.length ? (
                            filteredProperties.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))
                        ) : (
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: 200 }}>
                                    <Typography variant="h6" color="text.secondary">No properties found. Adjust your search criteria.</Typography>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </DialogContent>
            </Dialog>

            {selectedProperty && (
                <Dialog open={Boolean(selectedProperty)} onClose={handleDialogClose} maxWidth="md" fullWidth>
                    <DialogTitle>
                        <Typography variant="h6">{selectedProperty.name}</Typography>
                        <IconButton onClick={handleDialogClose} sx={{ float: 'right' }}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </DialogTitle>

                    <DialogContent>
                        <Grid container spacing={2}>
                            {/* Main Image and Details */}
                            <Grid item xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    image={selectedProperty.image}
                                    alt={selectedProperty.name}
                                    sx={{ height: 250 }}
                                />
                                <Typography sx={{ mt: 1 }}>{selectedProperty.details}</Typography>
                            </Grid>

                            {/* More Images Section */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6">More Images</Typography>
                                <Grid container spacing={1}>
                                    {selectedProperty.images.map((img, index) => (
                                        <Grid item xs={6} key={index}>
                                            <CardMedia
                                                component="img"
                                                image={img}
                                                alt={`Detail ${index + 1}`}
                                                sx={{ height: 100 }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            {/* Property Name1 Details Section */}
                            <Grid item xs={12}>
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    Property Details
                                </Typography>
                                <Box sx={{ mt: 1 }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Attribute</th>
                                                <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedProperty.propertyName1.map((item, index) => (
                                                <tr key={index}>
                                                    <td style={{ border: '1px solid #ccc', padding: '8px', fontWeight: 'bold' }}>{item.label}</td>
                                                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </Box>
                            </Grid>
                            {/* Floor Plans Section */}
                            <Grid item xs={12} sx={{ mt: 4 }}>
                                <Typography variant="h6">
                                    Floor Plans
                                </Typography>
                                <Box sx={{ mt: 1 }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Plan Type</th>
                                                <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Size</th>
                                                <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Bedrooms</th>
                                                <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Bathrooms</th>
                                                <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedProperty.floorPlans.map((plan, index) => (
                                                <tr key={index}>
                                                    <td style={{ border: '1px solid #ccc', padding: '8px', fontWeight: 'bold' }}>{plan.title}</td>
                                                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{plan.size}</td>
                                                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{plan.bedrooms}</td>
                                                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{plan.bathrooms}</td>
                                                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{plan.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </Box>
                            </Grid>
                            {/* Amenities Section */}
                            {/* Amenities Section */}
                            <Grid item xs={12} sx={{ mt: 4 }}>
                                <Typography variant="h6">
                                    Amenities
                                </Typography>
                                <Box sx={{ mt: 1 }}>
                                    <Grid container spacing={2}>
                                        {selectedProperty.amenities.map((amenity, index) => (
                                            <Grid item xs={4} key={index}>
                                                <Box sx={{ padding: '8px', fontSize: '14px' }}>
                                                    {amenity}
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>


                            <Grid item xs={12}>
                                <Typography variant="h6">Location</Typography>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10008.263061300044!2d77.40056425576917!3d28.493254611853878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce85b1d3a5d5d%3A0x1a500b55ee459de9!2sSector%20168%2C%20Noida%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1729161139997!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map of ${selectedProperty?.location}`}  // Add a meaningful title
                                ></iframe>

                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
};

// Styles
const cardStyles = {
    maxWidth: 345, boxShadow: 3, borderRadius: 2, overflow: 'hidden', transition: '0.3s',
    '&:hover': { boxShadow: 6, transform: 'scale(1.02)' }
};
const mainCardStyles = {
    width: 350, height: 480, borderRadius: 10, boxShadow: 6, overflow: 'hidden', transition: '0.3s',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    '&:hover': { transform: 'scale(1.05)', boxShadow: 12 }
};
const hoverImageStyle = { transition: '0.5s', '&:hover': { transform: 'scale(1.1)' } };
const buttonStyles = { borderRadius: 20, padding: '10px 24px', textTransform: 'none' };

export default AdvPropertyCardBuy;
