import { Flex } from "antd";

import CardComponent from "../../components/Card";

const Home = () => {
  return (
    <div className="home-card-area">
      <Flex wrap="wrap" justify="space-evenly" align="center">
        {/* <CardComponent
          title={"first title"}
          hoverable
          coverImage={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          style={{
            width: 300,
          }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          metaData={{
            avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
            title: "title",
            description: "description",
          }}
        /> */}

        <CardComponent
          title={"Client"}
          hoverable
          style={{
            width: 300,
          }}
          content={<p>hello this is content</p>}
        />
        <CardComponent
          title={"Quotation"}
          hoverable
          style={{
            width: 300,
          }}
          content={<p>hello this is content</p>}
        />
        <CardComponent
          title={"Product"}
          hoverable
          style={{
            width: 300,
          }}
          content={<p>hello this is content</p>}
        />
        <CardComponent
          title={"Invoice"}
          hoverable
          style={{
            width: 300,
          }}
          content={<p>hello this is content</p>}
        />
      </Flex>
    </div>
  );
};

export default Home;
