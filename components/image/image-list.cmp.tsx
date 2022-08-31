import { useEffect, useState, useCallback } from 'react'
import { Card, Row, Col } from 'antd';
const { Meta } = Card;
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Images() {
    const [imagesData, setImagesData] = useState([] as any)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchFeed()
    }, [])

    const fetchFeed: any = async () => {
        try {
          const { data } = await axios.get('/api/flickr-image-feed')
          setImagesData(data.data.items)
          console.log(data)
        } catch (e) {
          console.log(e)
        }
      }

    return (
        <>
            <div style={{
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "flex-start",
                alignItems: "flex-start"
            }}>
                <Row gutter={4}>
                    {
                        imagesData.map((image: any, index: any) => (
                            <Col>
                                <Card
                                key={index}
                                hoverable
                                style={{ height: "auto", width: 240, margin: "1%", padding: "10px" }}
                                cover={<img alt="example" src={`${image.media.m}`} />}
                                >
                                    <Meta title={image.title} description={image.tags} />
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}