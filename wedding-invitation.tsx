"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function WeddingInvitation() {
  const handleAddToCalendar = () => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250831T110000Z%2F20250831T184500Z&details=%D0%9C%D1%8B%20%D1%81%20%D1%80%D0%B0%D0%B4%D0%BE%D1%81%D1%82%D1%8C%D1%8E%20%D0%BF%D1%80%D0%B8%D0%B3%D0%BB%D0%B0%D1%88%D0%B0%D0%B5%D0%BC%20%D0%B2%D0%B0%D1%81%20%D0%BD%D0%B0%20%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D1%83%20%D0%A1%D0%B0%D1%82%D1%82%D0%B0%D1%80%D0%B0%20%D0%B8%20%D0%96%D0%B0%D0%BC%D0%B8%D0%BB%D0%B8%0A%0A%D0%94%D0%B0%D1%82%D0%B0%3A%2031%20%D0%90%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B0%20%0A%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%3A%0A-%2016%3A00%20%7C%20C%D0%B1%D0%BE%D1%80%20%D0%B3%D0%BE%D1%81%D1%82%D0%B5%D0%B9%0A-%2017%3A00%20%7C%20%D0%A6%D0%B5%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D0%B8%D1%8F%0A-%2017%3A30%20%7C%20%D0%A1%D0%B2%D0%B0%D0%B4%D0%B5%D0%B1%D0%BD%D0%BE%D0%B5%20%D1%82%D0%BE%D1%80%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%BE%0A%0A%D0%90%D0%B4%D1%80%D0%B5%D1%81%3A%0A-%20%D0%91%D0%B0%D0%BD%D0%BA%D0%B5%D1%82%D0%BD%D1%8B%D0%B9%20%D0%B7%D0%B0%D0%BB%20%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%B0%20Gaia%0A-%20%D1%83%D0%BB.%20%D0%9B%D1%83%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%2054%2F4%2C%20%D0%B3.%20%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%0A-%202GIS%3A%20https%3A%2F%2Fgo.2gis.com%2FRjcVA%0A&location=%D1%83%D0%BB.%20%D0%9B%D1%83%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%2054%2F4%2C%20%D0%B3.%20%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B&text=%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%3A%20%D0%A1%D0%B0%D1%82%D1%82%D0%B0%D1%80%20%D0%B8%20%D0%96%D0%B0%D0%BC%D0%B8%D0%BB%D1%8F`
    window.open(googleCalendarUrl, "_blank")
  }

  const handleVenueLink = () => {
    // 2GIS link for the venue
    window.open(`https://go.2gis.com/RjcVA`, "_blank")
  }

  return (
    <div className="min-h-screen bg-[#FFF9F3] flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full text-center space-y-12">
        {/* Decorative Ornate Crest */}
        <div className="flex justify-center mb-8">
          <div className="w-40 h-40">
            <Image
              src="/images/Ritz_Paris_Logo-cropped.svg"
              alt="Ornate Wedding Crest"
              width={320}
              height={320}
              className="w-full h-full object-contain clip-diagonal"
            />
          </div>
        </div>

        {/* Main Invitation Message */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-serif text-gray-700 leading-relaxed">
            Мы счастливы пригласить вас на нашу свадьбу и разделить с вами этот важный момент
          </h1>
        </div>

        {/* 
        <div className="space-y-8 py-8">
          <div className="text-5xl md:text-7xl font-serif text-[#7D1C1C] leading-none">
            <div className="mb-2">Саттар</div>
            <div className="text-3xl md:text-4xl opacity-80">&</div>
            <div className="mt-2">Жамиля</div>
          </div>
        </div> */}

        {/* Images */}
        <div className="space-y-2 py-2">
          <Image
            src="/images/Sattar.PNG"
            alt="Sattar"
            width={160}
            height={120}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="text-3xl md:text-4xl font-serif text-[#7D1C1C] leading-none text-2xl md:text-3xl opacity-80 italic">&</div>
          <Image
            src="/images/Zhamilya.PNG"
            alt="Zhamilya"
            width={160}
            height={120}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Wedding Date */}
        <div className="space-y-4">
          <div className="text-3xl md:text-4xl font-serif text-gray-700 tracking-wider">31 Августа 2025</div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-4 py-4">
          <h2 className="text-xl md:text-2xl font-serif text-[#7D1C1C] mb-6">Расписание мероприятия</h2>

          <div className="flex justify-center">
            <table className="text-center space-y-4">
              <tbody className="space-y-4">
                <tr>
                  <td className="text-2xl font-serif text-[#7D1C1C] pr-8 py-2">16:00</td>
                  <td className="text-lg font-serif text-gray-700 py-2">Сбор гостей</td>
                </tr>
                <tr>
                  <td className="text-2xl font-serif text-[#7D1C1C] pr-8 py-2">17:00</td>
                  <td className="text-lg font-serif text-gray-700 py-2">Церемония</td>
                </tr>
                <tr>
                  <td className="text-2xl font-serif text-[#7D1C1C] pr-8 py-2">17:30</td>
                  <td className="text-lg font-serif text-gray-700 py-2">Свадебное торжество</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* Venue Information */}
        <div>
          <h2 className="text-xl md:text-2xl font-serif text-[#7D1C1C] mb-6">Адрес</h2>
          <div className="space-y-2 text-gray-600 font-serif">
            <div className="text-lg">Банкетный зал ресторана GAIA</div>
            <div className="text-base">ул. Луганская 54/4, г. Алматы</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button
            onClick={handleAddToCalendar}
            className="bg-[#7D1C1C] hover:bg-[#6B1818] text-white font-serif text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Google Calendar
          </Button>

          <button
            onClick={handleVenueLink}
            className="text-[#7D1C1C] hover:text-[#6B1818] font-serif text-lg underline underline-offset-4 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Адрес в 2GIS
          </button>
        </div>

        {/* Closing Message */}
        <div className="pt-8 pb-6 text-center">
          <p className="text-xl font-serif text-gray-700 italic leading-none mb-1">
            C любовью из Амстердама
          </p>
          <Image
            src="/images/amsterdam-logo.png"
            alt="Amsterdam City Symbol"
            width={120}
            height={40}
            className="inline-block object-contain"
          />
        </div>
      </div>
    </div>
  )
}
