import React from 'react';
import { Grid } from '@mui/material';
import Adv_PropertyCard from './Adv_PropertyCard';

const Adv_MainContent = () => {
    const propertyData = [
        // {
        //     image: 'https://images.herzindagi.info/image/2021/May/quick-tips-to-sell-old-property-with-profit.jpg',
        //     title: 'Buy',
        //     description: 'Your Next Property'
        // },
        // {
        //     image: 'https://d32b5joreyushd.cloudfront.net/media/uploads/2019/04/15/sell-property-online.jpg',
        //     title: 'Sell',
        //     description: 'Your Property'
        // },
        // {
        //     image: 'https://valuepersqft.com/wp-content/uploads/2023/07/real-estate-consultant-service.jpg',
        //     title: 'Join us as Advisor',
        //     description: '...'
        // },
        // {
        //     image: 'https://www.homznspace.com/wp-content/uploads/2022/01/plots-img-hns1A.jpg',
        //     title: 'Explore Projects',
        //     description: '...'
        // },
        // {
        //     image: 'https://media.licdn.com/dms/image/D4D12AQEX-3yjNTnz5g/article-cover_image-shrink_720_1280/0/1665477174725?e=2147483647&v=beta&t=OaTtIf9VQlDDiRXszOyDdheRVHhSMrV4j0gt8WUbv3s',
        //     title: 'Reecocefe',
        //     description: '...'
        // }
    ];

    return (
        <Grid container spacing={3} justifyContent="center" style={{ padding: '20px' }}>
            {propertyData.map((property, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                    <Adv_PropertyCard
                        image={property.image}
                        title={property.title}
                        description={property.description}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Adv_MainContent;
