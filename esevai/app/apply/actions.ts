"use server"

import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function createApplicationDraft(data: {
  serviceSlug: string;
  serviceName: string;
  formData: any;
  amount: number;
  currency: string;
}) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    throw new Error("Unauthorized: Please login to apply.")
  }
  
  try {
    const application = await prisma.application.create({
      data: {
        userId: session.user.id,
        serviceName: data.serviceName,
        formData: data.formData,
        amount: data.amount,
        currency: data.currency,
        status: "draft",
        paymentStatus: "pending",
      }
    })
    
    return { success: true, applicationId: application.id }
  } catch (error) {
    console.error("Failed to create application draft:", error)
    return { success: false, error: "Database error occurred while saving the application." }
  }
}
