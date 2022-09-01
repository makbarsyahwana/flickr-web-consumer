import { useEffect, useState, useCallback } from 'react'
import { Card, Row, Col, Button, Skeleton } from 'antd';
const { Meta } = Card;
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Images() {
    const [imagesData, setImagesData] = useState([] as any)
    const [loadingSkeleton, setLoadingSkeleton] = useState<boolean>(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchFeed()
    }, [])

    const fetchFeed: any = async () => {
        imagesData?.length < 1 && setLoadingSkeleton(true)
        try {
          const { data } = await axios.get('/api/flickr-image-feed')
          const images = data.data.items
          if (imagesData?.length > 0) {
            setImagesData([
                ...imagesData,
                ...images
            ])
          } else {
            setImagesData(images)
          }
        } catch (e) {
          console.log(e)
        }
        setLoadingSkeleton(false)
      }
    
    const handleLoadMore = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        fetchFeed()
    }

    return (
        <>
            <Skeleton loading={loadingSkeleton} active={true}>
                <div style={{
                    display: "flex",
                    flexFlow: "column wrap",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }}>
                    <Row gutter={4}>
                        {console.log(imagesData)}
                        {
                            imagesData?.map((image: any, index: any) => (
                                <Col key={index}>
                                    <Card
                                    key={index}
                                    hoverable
                                    style={{position: "relative",height: "auto", width: 240, margin: "1%", padding: "10px" }}
                                    cover={<Image height={300} width={240} layout={'responsive'} alt="flickr-image" src={image?.media?.m} />}
                                    >
                                        <Meta title={image.title} description={image.tags} />
                                    </Card>
                                </Col>
                            ))
                        }
                        <div id="load-more" style={{ width: "100%", textAlign: "center", marginTop: 25, marginBottom: 25}}>
                            <Button onClick={handleLoadMore} type="primary" shape="round" size={'large'}>
                                Load More
                            </Button>
                        </div>
                    </Row>
                </div>
            </Skeleton>
        </>
    )
}