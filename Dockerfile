# ใช้ Node image
FROM node:20-alpine

# ตั้ง working directory
WORKDIR /usr/src/app

# Copy package.json และติดตั้ง dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# ระบุ port
EXPOSE 3000

# คำสั่งเริ่ม app
CMD ["npm", "start"]
