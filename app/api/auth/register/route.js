import { connectToDB } from "@/utils/database"
import User from "@/model/user";
import bcrypt from 'bcryptjs';

export const POST = async (req) => {
  const {
    password, email, username
  } = await req.json();

  console.log( password, email, username);
  try {
    await connectToDB();
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(JSON.stringify({ message: `Registered Success!"` }), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Failed to create User" }), { status: 500 });
  }
};
