import React, { useState } from "react"
import Head from "next/head"
import { useStore } from "../stores"
import Layout from "../components/Layout"

const DetailedView: React.FC<{
  name: string
  price: string
  link: string
  rating: number
  img: string
  seller: string
}> = ({ name, img, seller, price, link }) => {
  return (
    <div className="border border-gray-400 shadow-md rounded-md bg-white p-3 my-2 w-full max-w-md m-auto">
      <img className="rounded-sm" src={img} alt={name} />

      <div className="p-6">
        <h4 className="text-sm font-medium text-gray-600 uppercase">
          Sold on {seller}
        </h4>
        <h1 className="text-xl font-bold tracking-wide">{name}</h1>
        <p className="text-md font-medium tracking-wide">{price}</p>

        <div className="flex justify-end">
          <button className="p-2 bg-teal-500 font-medium uppercase rounded-sm text-white">
            <a href={link} target="_blank">
              Purchase
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

const Modal = ({ children, onClick }) => {
  return (
    <div
      className="z-50 fixed top-0 left-0 right-0 bottom-0 fade overflow-auto smoke "
      onClick={onClick}
    >
      <div className="container mx-auto mt-16">{children}</div>
      <style jsx>{`
        .fade {
          transition: opacity 0.15s linear;
        }

        .smoke {
          background-color: rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  )
}
const Home = () => {
  const { count, increase, reset } = useStore()

  const [seeModal, setSeeModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const data = {
    creator: "Lenard Pratt",
    items: [
      {
        type: "Top",
        price: "£50",
        name: "Asio Plain white tee",
        seller: "Asio",
        img:
          "https://images.asos-media.com/products/collusion-plus-exclusive-long-sleeve-t-shirt-dress-with-la-precision-print-in-white/20184540-1-white?$XXL$&wid=513&fit=constrain",
        link: "..",
      },

      {
        type: "Joggers",
        price: "£50",
        name: "Nike grey joggers",
        seller: "Nike",

        img:
          "https://images.asos-media.com/products/crooked-tongues-joggers-with-logo-in-grey-marl/20360163-1-greymarl?$XXL$&wid=513&fit=constrain",
      },
      {
        type: "Shoes",
        price: "£50",
        name: "Nike Air Jordans",
        seller: "Nike",
        img:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSefFrf4G9LFUXQD-LJLFybaxswNGu3I-3TTanJ7dMzwBhxa8Jog&usqp=CAc",
        link: "..",
      },
    ],
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="p-4">
          <h1 className="text-5xl font-semibold text-xl tracking-tight">
            Outfit created by {data.creator}
          </h1>

          <div className="flex ">
            <h2 className="text-2xl tracking-tight ">Share on:</h2>

            <button className="ml-2 rounded-md px-3 border border-gray-400 bg-purple-600 text-white">
              Instagram
            </button>

            <button className="ml-2 rounded-md px-3 border border-gray-400 bg-blue-600 text-white tracking-wider">
              Twitter
            </button>

            <button className="ml-2 rounded-md px-3 border border-gray-400 bg-red-600 text-white">
              Reddit
            </button>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1">
              {data.items.map((product) => (
                <div className="p-2 flex items-center" key={product.name}>
                  <svg
                    className="h-5 w-5 mr-3"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7"></path>
                  </svg>

                  <img
                    className="w-64 h-64 rounded-md"
                    src={product.img}
                    alt={product.name}
                    onClick={() => {
                      setSeeModal(true)
                      setSelectedProduct(product)
                    }}
                  />

                  <svg
                    className="h-5 w-5 ml-4"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {seeModal ? (
            <Modal onClick={() => setSeeModal(false)}>
              <DetailedView
                name={selectedProduct.name}
                price={selectedProduct.price}
                rating={5.0}
                link="https://google.com"
                img={selectedProduct.img}
                seller={selectedProduct.seller}
              />
            </Modal>
          ) : null}
        </div>
      </Layout>
    </div>
  )
}

export default Home
