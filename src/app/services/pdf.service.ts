import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Itinerario } from './itinerarios.service';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  generarPDF(itinerario: any) {
    const doc = new jsPDF();

    const logoUrl = '/assets/img/RoanAwayNewLogoPNG.png';
    const imgWidth = 90;
    const imgHeight = 30;
    const pageWidth = doc.internal.pageSize.getWidth();

    const cargarImagen = new Promise<void>((resolve) => {
      const img = new Image();
      img.src = logoUrl;
      img.onload = () => {
        const x = (pageWidth - imgWidth) / 2; // Centrado horizontal
        doc.addImage(img, 'PNG', x, 10, imgWidth, imgHeight);
        resolve();
      };
    });

    cargarImagen.then(() => {
      let y = 45;

      // País (destino)
      doc.setFontSize(20);
      doc.setTextColor(61, 22, 56);
      doc.setFont('Quicksand', 'bold');
      doc.text(itinerario.destino, 10, y);
      y += 10;

      // Ciudades (más pequeñas que el país, más grandes que el resumen)
      doc.setFontSize(14);
      doc.setTextColor(61, 22, 56);
      doc.setFont('Quicksand', 'normal');
      doc.text(itinerario.ciudades, 10, y);
      y += 8;

      // Después de doc.text(itinerario.ciudades, x, y);
      const lineY = y + 2; // un poco abajo de las ciudades
      doc.setDrawColor(61, 22, 56); // color de la línea, por ejemplo igual que el país
      doc.setLineWidth(0.1); // grosor de la línea
      doc.line(10, lineY, doc.internal.pageSize.getWidth() - 10, lineY); // línea horizontal de margen a margen


      // Info corta debajo del país
      doc.setFontSize(10);
      doc.setTextColor(61, 22, 56);
      doc.setFont('Nunito', 'normal');
      const resumen = `${itinerario.dias} días • ${itinerario.presupuesto} • ${itinerario.tipo}`;
      doc.text(resumen, 10, y);
      y += 8;

      // Info del país (a la derecha)
      doc.setFontSize(8);
      doc.setTextColor(100);
      const info = `Moneda: ${itinerario.moneda} | Idioma: ${itinerario.idioma} | Época: ${itinerario.epoca}`;
      const infoX = pageWidth - doc.getTextWidth(info) - 10;
      doc.text(info, infoX, y);
      y += 10;

      let finalY = y;

      // Actividades por día
      itinerario.actividades.forEach((dia: any[], i: number) => {
        doc.setTextColor(0);
        doc.setFontSize(13);
        doc.setTextColor(61, 22, 56);
        doc.setFont('Nunito', 'bold');
        doc.text(`Día ${i + 1}`, 10, finalY);
        finalY += 6;

        autoTable(doc, {
          startY: finalY,
          head: [['Nombre', 'Duración']],
          body: dia.map((act: any) => [act.nombre, act.duracion]),
          theme: 'grid',
          headStyles: {
            fillColor: [160, 99, 153],
            textColor: 255,
            fontStyle: 'bold'
          },
          styles: {
            fontSize: 10,
            cellPadding: 3
          },
          didDrawPage: (data) => {
            finalY = (data.cursor?.y ?? finalY) + 10;
          }
        });
      });

      doc.save(`Itinerario-${itinerario.destino}.pdf`);
    });
  }
}
