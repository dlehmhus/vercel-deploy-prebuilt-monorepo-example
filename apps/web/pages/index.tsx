import { GetServerSidePropsContext } from "next";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: { hello: "world"}, 
  }
}