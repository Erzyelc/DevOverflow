"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function getUserById(parmas: any) {
  try {
    connectToDatabase();

    const { userId } = parmas;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
