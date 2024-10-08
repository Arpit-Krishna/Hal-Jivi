import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';


const projectId = '2Rbipvdcsy8gUILIOTJcvydrimM';
const projectSecret = 'cc6b9966f2d8b0484a5f3ab1b1760f32';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


// Connect to the IPFS node
// const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// const ipfs = {
//     host: "ipfs.infura.io",
//     port: 5001,
//     path: "/api/v0/pin/add?arg=QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn",
//     method: "POST",
//     auth: projectId + ":" + projectSecret,
//   };

const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  });
  export async function uploadToIPFS(file) {
    const result = await ipfs.add(file);
    return result.path;
  }
  
  export async function getFromIPFS(hash) {
    const stream = ipfs.cat(hash);
    let data = '';
  
    for await (const chunk of stream) {
      data += chunk.toString();
    }
  
    return data;
  }
  