import React, {ReactElement, useEffect} from "react";
import LayoutDefault from "../components/layout/layout-default"
import Images from "../components/image/image-list.cmp";

// interface IProps {
//     returnUrl: string,
//     notification: string,
//     jwtToken: any
// }

function Page() {

    return (
        <>
            <Images />
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutDefault>
            {page}
        </LayoutDefault>
    )
}

export default Page

// export async function getServerSideProps(context: any) {

// }
