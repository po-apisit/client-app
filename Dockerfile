# ใช้ Node.js เวอร์ชัน LTS ล่าสุดเป็นฐาน
FROM node:20.0

# กำหนดโฟลเดอร์ที่จะเป็นโฟลเดอร์ทำงาน
WORKDIR /app

# คัดลอก package.json และ package-lock.json (หรือ yarn.lock) เพื่อให้รัน npm install ในขั้นตอนถัดไป
COPY package.json ./
COPY yarn.lock ./

# ติดตั้ง dependencies โดยใช้ yarn (หรือ npm)
RUN yarn install --frozen-lockfile

# คัดลอกโค้ดและไฟล์อื่นๆ ไปยังโฟลเดอร์ทำงาน
COPY . .

# สร้าง production build ของโปรเจกต์
RUN yarn build

# ใช้ Nginx เป็นเว็บเซิร์ฟเวอร์สำหรับรันโปรเจกต์ Next.js
FROM nginx:alpine

# คัดลอก production build จาก builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# คัดลอกไฟล์คอนฟิก Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ให้ Nginx เป็น foreground process เพื่อให้ Docker container รันได้
CMD ["nginx", "-g", "daemon off;"]
