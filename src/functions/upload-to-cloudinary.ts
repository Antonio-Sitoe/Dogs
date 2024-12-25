import { v2 as cloudinary } from 'cloudinary'

export async function uploadToCloudinary(imageBuffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'image',
        folder: 'dogs',
      },
      (error, result) => {
        if (error) {
          reject(new Error(`Erro ao fazer upload: ${error.message}`))
        } else {
          resolve(result?.url || '')
        }
      },
    )
    uploadStream.end(imageBuffer)
  })
}
