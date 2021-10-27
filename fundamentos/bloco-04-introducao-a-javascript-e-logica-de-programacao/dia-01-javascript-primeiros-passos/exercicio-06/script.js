let piece = "Queen";
piece = piece.toLowerCase();

switch (piece) {
  case "pawn":
    console.log("moves forward");
    break;

  case "bishop":
    console.log("moves diagonally");
    break;

  case "knight":
    console.log("jumps one square horizontally and two squares vertically")
    break;

  case "rook":
    console.log("moves horizontally and vertically");
    break;

  case "queen":
    console.log("moves horizontally, vertically and diagonally");
    break;

  case "king":
    console.log("moves one square in any direction");
    break;

  default:
    console.log("ERROR: Invalid piece");
    break;
}