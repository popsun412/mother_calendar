function Page(props) {
    console.log(props.preFetchedItem);

    return (<></>);
}


export const getServerSideProps = async ({ locale, query }) => {
    return {
        props: {
            preFetchedItem: "abcdefg",
        },
    };
};

export default Page