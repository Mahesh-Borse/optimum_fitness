import React from 'react';
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const HorizontalCardScrollbar = ({ data, setBodyPart, bodyPart }) => {

    return (
        <ScrollMenu>

            {data.map((item) => {
                return <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m='20px 40px'>
                    <BodyPart
                        item={item}
                        setBodyPart={setBodyPart}
                        bodyPart={bodyPart}
                    />

                </Box>
            })}


        </ScrollMenu>
    )
}

export default HorizontalCardScrollbar